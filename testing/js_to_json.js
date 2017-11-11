
class Create_Account
{
  constructor()
  {
    this.username = document.getElementByID('username').value;
    this.email = document.getElementByID('email').value;
    this.password = document.getElementByID('password').value;
    this.legal_name = document.getElementByID('legal_name').value;
    this.phone_number = document.getElementByID('phone_number').value;
    this.driver = document.getElementByID('driver').value;
    this.university = document.getElementByID('university').value;
  }

  package_data()
  {
    var user = {"Email": this.email, "Username": this.username, "Password": this.password, "Legal Name": this.legal_name, "Phone Number": this.phone_number, "Driver": this.driver, "University": this.university};
    return user;
  }

  convertToJSON(user_data)
  {
    var JSON_data = JSON.stringify(user_data);
    return JSON_data;
  }

  package_JSON()
  {
    var packaged_JSON = convertToJSON(package_data());
    return(packaged_JSON)
  }

}

var person = new Create_Account();
var store = person.package_JSON();
console.log(store);
