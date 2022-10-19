import sqlite3
from flask import Flask, request, render_template
from flask import g

dataServer = './dataserver.bd'

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

def carregar_banco():
    banco = getattr(g, '_database', None)

    if banco is None:
        g._database = sqlite3.connect(dataServer)
        banco = g._database

        return banco

def criar_tabela():
    banco = carregar_banco()
    script_criacao = open ('schemas\schema.sql').read()
    banco.executescript(script_criacao)

@app.route('/')
def index():
    banco = carregar_banco
    criar_tabela()
    return "<h1>Tabela Criada :)</h1>"

@app.route('/add', methods = ['POST',])
def salvar():
    banco = carregar_banco()
    cur = banco.cursor()

    nome = request.form["nome"]
    ano = request.form["ano"]
    
    cur.execute("""
    INSERT INTO Filme (nome, ano)
    VALUES (?,?)""",
    (nome, ano))
    
    banco.commit()
    banco.close()

    return "Nome: %s, Ano: %s" % (nome, ano)

@app.route('/select', methods = ['POST',])
def ver():
    banco = carregar_banco()
    cur = banco.cursor()

    id = request.form["id"]
    
    result = cur.execute("""
    SELECT id,nome,ano FROM Filme 
    WHERE id=?
    """,
    (id)).fetchall()
    
    banco.commit()
    banco.close()

    return render_template ("select.html", result = result)

@app.route('/selectall', methods = ['POST',])
def verTudo():
    banco = carregar_banco()
    cur = banco.cursor()

    result = cur.execute("""
    SELECT * FROM Filme 
    """,
    ).fetchall()
    
    banco.commit()
    banco.close()

    return render_template ("selectall.html", result = result)

@app.route('/create')
def form_insercao():
    return render_template('index.html')