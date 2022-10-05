from flask import Flask, render_template

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/<nome>')
def index(nome):
    return render_template('index.html', nome=nome)
