import React from 'react'
import { Link } from 'gatsby'

const footer = () => {
    return (
        <>
            {/* ########### Color Block Footer Form ########### */}

            <div className="color-block py-5">
                <div className="container">
                    <div className="row">
                        <div className="header text-center mx-auto">
                            <div className="inline-form-title">Vi har sat kaffen over</div>
                            <p className="inline-form-subtitle">til en uforpligtende snak omkring hvad vi kan tilbyde dig</p>
                        </div>
                    </div>
                    <div className="row form-row inline-from py-5">
                        <div class="form-group col-md-3">
                            <label htmlFor="i-name">Navn</label>
                            <input type="text" id="i-name" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label htmlFor="i-phone">Telefon</label>
                            <input type="tel" id="i-phone" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label htmlFor="i-email">Email</label>
                            <input type="email" id="i-email" class="form-control" />
                        </div>
                        <div class="form-group col-md-3">
                            <label htmlFor="name">&nbsp;</label>
                            <input type="submit" id="name" class="form-control" value="Kontakt mig" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Ydelser og viden</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-muted" href="#">Blog</Link></li>
                            <li><Link className="text-muted" href="#">Facebook Ads</Link></li>
                            <li><Link className="text-muted" href="#">Google Ads</Link></li>
                            <li><Link className="text-muted" href="#">Seo</Link></li>
                            <li><Link className="text-muted" href="#">E-mail marketing</Link></li>
                            <li><Link className="text-muted" href="#">Amazon</Link></li>
                            <li><Link className="text-muted" href="#">Udvikling</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Følg os</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link className="text-muted" href="#">Sitemap</Link></li>
                            <li><Link className="text-muted" href="#">Job</Link></li>
                            <li><Link className="text-muted" href="#">Privatlivspolitik</Link></li>
                            <li><Link className="text-muted" href="#">Betingelser</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Peopl A/S</h5>
                        <p>
                            Ny Carlsbergvej 80 <br />
                            1760 København V
                        </p>
                        <p>
                            Telefon:  +45 28 87 57 00 <br />
                            Mail:  info@peopl.dk <br />
                            CVR: 37995193
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer