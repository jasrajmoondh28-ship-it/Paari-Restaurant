body {
  font-family: Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.6;
  background: #fff8f0;
  color: #333;
}

header {
  background: url('images/hero.jpg') center/cover no-repeat;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

header h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

header p {
  font-size: 1.2em;
  margin-bottom: 1em;
}

.btn {
  padding: 10px 20px;
  background: #ff6600;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

section {
  padding: 50px 20px;
  text-align: center;
}

#menu .menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.menu-item {
  background: #fff3e6;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}

form input, form textarea, form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  background: #ff6600;
  color: #fff;
  border: none;
  cursor: pointer;
}

footer {
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

footer .social a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}

@media(max-width:768px){
  #menu .menu-items {
    flex-direction: column;
    align-items: center;
  }
}