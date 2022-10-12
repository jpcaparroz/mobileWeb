from flask import Flask, render_template, request

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/formulario')
def abrirform():
    return render_template('formulario.html')

@app.route('/processar', methods = ['POST',])
def criar_tabela_dados():
    nome = request.form['nome']
    idade = request.form['idade']
    filme = request.form['filme']

    return  '''<table>
              <tr><td>Nome:</td><td>%s</td></tr>
              <tr><td>Idade:</td><td>%s</td></tr>
              <tr><td>Filme:</td><td>%s</td></tr>
            </table>''' % (nome.upper(), idade, filme.upper())