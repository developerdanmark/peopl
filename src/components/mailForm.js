import React from 'react'

const MailForm = () => {
    return (
        <form className="banner-form" name="contact" method="POST" data-netlify="true">
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

export default MailForm