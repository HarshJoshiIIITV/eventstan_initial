import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'

class Form_org extends Component {
    constructor() {
        super();
        this.state = {
            type: "2",
            Bemail: "",
            Bname: "",
            BcontactNumber: "",
            contactPerson: "",
            Ospecilization: "",
            OintroduceYourself: "",
            city: ""

        }
    }
    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    on_tele_change = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ BcontactNumber: e.target.value })
        }
    }

    valid = (curr_state) => {

        const {
            Bemail,
            Bname,
            BcontactNumber,
            contactPerson,
            Ospecilization,
            OintroduceYourself,
            city
        } = curr_state
        if (Bemail.length == 0 || Bname.length == 0 || BcontactNumber.length == 0 || !(/^\d+$/.test(BcontactNumber)) || contactPerson.length == 0 || Ospecilization.length == 0
            || OintroduceYourself.length == 0 || city.length == 0 || city.localeCompare("select") == 0 || Ospecilization.localeCompare("select") == 0) {
            return false;
        }
        else {
            return true;
        }
    }

    onsubmit1 = (event) => {
        event.preventDefault();
        if (!this.valid(this.state)) {
            document.getElementById("message_contact2").innerHTML = ""
            document.getElementById("message_contact").innerHTML = ""
            document.getElementById("message_contact2").innerHTML = "Please fill all details!"
            setTimeout(
                () => {
                    document.getElementById("message_contact").innerHTML = "";
                    document.getElementById("message_contact2").innerHTML = "";
                },
                5000
            )
            return;
        }
        axios.post('https://api.eventstan.com/user/professionalContactUs',
            this.state
        )
            .then((resp) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                document.getElementById("message_contact").innerHTML = "Thanks for contacting, Our Member reach out to you soon"
                setTimeout(
                    () => {
                        document.getElementById("message_contact").innerHTML = "";
                        document.getElementById("message_contact2").innerHTML = "";
                    },
                    5000
                );
                var frm = document.getElementById('abc7');
                frm.reset();  // Reset all form data
                document.getElementById('abc11').value = '';
            })
            .catch((err) => {
                document.getElementById("message_contact2").innerHTML = ""
                document.getElementById("message_contact").innerHTML = ""
                document.getElementById("message_contact2").innerHTML = "Please fill all details!"
                setTimeout(
                    () => {
                        document.getElementById("message_contact").innerHTML = "";
                        document.getElementById("message_contact2").innerHTML = "";
                    },
                    5000
                );

            });
    }
    render() {
        return (
            <form autoComplete="nope" id="abc7" onSubmit={this.onsubmit1} >
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label>Business name</label>
                            <input autoComplete="nope" id="abc8" required onChange={this.onchange} name="Bname" type="text" class="form-control" placeholder="Enter business name " />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >Business Email</label>
                            <input required name="Bemail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autoComplete="nope" id="abc9" onChange={this.onchange} type="email" class="form-control" placeholder="Enter business email " />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >Contact person</label>
                            <input required name="contactPerson" autoComplete="nope" id="abc10" onChange={this.onchange} type="text" class="form-control" placeholder="Enter person name " />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label>Business contact number</label>
                            <input required name="BcontactNumber" autoComplete="nope" id="abc11" value={this.state.BcontactNumber} onChange={this.on_tele_change} type="text" class="form-control" placeholder="Enter Mobile number " />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >City</label>
                            <select required onChange={this.onchange} id="cars" autoComplete="nope" name="city" class="form-control" placeholder="Select">
                                <option value="select">Select</option>
                                <option value="abu dhabi">Abu dhabi</option>
                                <option value="dubai">Dubai</option>
                                <option value="ajman">Ajman</option>
                                <option value="fujariah">Fujariah</option>
                                <option value="rak">Ras al Khaimah</option>
                                <option value="sharjah">Sharjah</option>
                                <option value="uaq">Umm al quwain</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="form-group">
                            <label >Specilization</label>
                            <select required onChange={this.onchange} id="cars2" autoComplete="nope" name="Ospecilization" class="form-control" placeholder="Select">
                                <option value="select">Select</option>
                                <option value="anchors">Anchors/Mcs</option>
                                <option value="celebrity">Celebrity</option>
                                <option value="dj">DJ</option>
                                <option value="singers">Singers</option>
                                <option value="live band">Live Band</option>
                                <option value="instrumentalist">Instrumentalist</option>
                                <option value="photographer">Photographer</option>
                                <option value="magician">Magician</option>
                                <option value="comedian">Comedian</option>
                                <option value="dancers">Dancers</option>
                                <option value="choreohraphers">Choreohraphers</option>
                                <option value="bdayenterntainers">B'day enterntainers</option>
                                <option value="bartender">Bartender</option>
                                <option value="specialshows">Special Shows</option>
                                <option value="venueprovider">Venue provider</option>
                                <option value="decor">Decor</option>
                                <option value="caters">Caters</option>
                                <option value="shishaguy">Shisha Guy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label >Briefly introduce yourself: ( include links /references)</label>
                    <textarea required type="text" onChange={this.onchange} autoComplete="nope" id="abc12" name="OintroduceYourself" class="form-control" rows="6" placeholder="Write here"></textarea>
                </div>
                <h6 id="message_contact" style={{ color: 'green' }}></h6>
                <h6 id="message_contact2" style={{ color: 'red' }}></h6>
                <Button type="submit" className="btn">Submit</Button>
            </form>

        )
    }


}

export default Form_org;