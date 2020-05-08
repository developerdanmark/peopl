import React, { Component } from 'react';
import axios from 'axios';

class MailForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                phone: phone,
                email: email,
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <form className="banner-form" name="contact" method="POST" netlify>
                <input type="hidden" name="bot-field" />
                <div className="form-title">
                    Skal vi også vækste <br /> din virksomhed?
                    </div>
                <div className="form-subtitle">
                    Lad os invitere dig ind til et <br /> uforpligtende møde
                    </div>
                <div className="form-group">
                    <label htmlFor="name">Navn</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" className="form-control" id="phone" name="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-banner-form">Bliv kontaktet</button>
            </form>
        )
    }
}
// onSubmit={this.handleSubmit.bind(this)}
export default MailForm;

// const MailForm = () => {
//     return (
        // <form className="banner-form" name="contact" method="POST"  onSubmit={this.handleSubmit.bind(this)}>
        //     <input type="hidden" name="bot-field" />
        //     <div className="form-title">
        //         Skal vi også vækste <br /> din virksomhed?
        //     </div>
        //     <div className="form-subtitle">
        //         Lad os invitere dig ind til et <br /> uforpligtende møde
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="name">Navn</label>
        //         <input type="text" className="form-control" id="name" name="name" />
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="phone">Telefon</label>
        //         <input type="tel" className="form-control" id="phone" name="phone" />
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="email">Email</label>
        //         <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
        //     </div>
        //     <button type="submit" className="btn btn-banner-form">Bliv kontaktet</button>
        // </form>
//     )
// }

// export default MailForm