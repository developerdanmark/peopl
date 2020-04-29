import React from 'react';

const MobileMenu = () => {
    return (
        <>
            <div class="menu-container d-flex d-md-none">
            <a href="#" class="menu-button d-md-none">Menu</a>
                <nav class="menu active">
                    <a href="#" class="menu-close">×</a>
                    <ul class="menu-box">
                        <li><a href="#">One</a></li>
                        <li><a href="#">Two</a></li>
                        <li><a href="#">Three</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MobileMenu