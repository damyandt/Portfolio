export const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <h2>CONTACTS</h2>
            <div className="contactsText">
                <h3>Don't be shy! Hit me up! </h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 448l0-177.6c5.2 1 10.5 1.6 16 1.6l16 0 0 32 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16zM80 224c-17.7 0-32-14.3-32-32c0 0 0 0 0 0l0-24c0-66.3 53.7-120 120-120l48 0c52.5 0 97.1 33.7 113.4 80.7c-3.1-.5-6.2-.7-9.4-.7c-20 0-37.9 9.2-49.7 23.6c-9-4.9-19.4-7.6-30.3-7.6c-15.1 0-29 5.3-40 14c-11-8.8-24.9-14-40-14l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0-40 0zM0 192s0 0 0 0c0 18 6 34.6 16 48l0 208c0 35.3 28.7 64 64 64s64-28.7 64-64l0-82c5.1 1.3 10.5 2 16 2c25.3 0 47.2-14.7 57.6-36c7 2.6 14.5 4 22.4 4c20 0 37.9-9.2 49.7-23.6c9 4.9 19.4 7.6 30.3 7.6c35.3 0 64-28.7 64-64l0-64 0-24C384 75.2 308.8 0 216 0L168 0C75.2 0 0 75.2 0 168l0 24zm336 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64zM160 272c5.5 0 10.9-.7 16-2l0 2 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 16 0zm64-24l0-40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24z" /></svg>
            </div>
            <div className="contactsIcons">
                <div className="miniCard">
                    <a href="https://www.google.com/maps/place/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6955288,23.241546,12z/data=!3m1!4b1!4m6!3m5!1s0x40aa8682cb317bf5:0x400a01269bf5e60!8m2!3d42.6977082!4d23.3218675!16zL20vMGZ0ang?entry=ttu" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></a>
                    <div className="cardText">
                        <a href="https://www.google.com/maps/place/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6955288,23.241546,12z/data=!3m1!4b1!4m6!3m5!1s0x40aa8682cb317bf5:0x400a01269bf5e60!8m2!3d42.6977082!4d23.3218675!16zL20vMGZ0ang?entry=ttu" target="_blank" className="bold"><p>Location</p></a>
                        <a href="https://www.google.com/maps/place/%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6955288,23.241546,12z/data=!3m1!4b1!4m6!3m5!1s0x40aa8682cb317bf5:0x400a01269bf5e60!8m2!3d42.6977082!4d23.3218675!16zL20vMGZ0ang?entry=ttu" target="_blank" className="diffColor"><p>Sofia, Bulgaria</p></a>
                    </div>

                </div>
                <div className="miniCard2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                    <div className="cardText">
                        <p className="bold">Mail</p>
                        <p className="diffColor">damqn_dimitrov1111@icloud.com</p>
                    </div>

                </div>
            </div>

        </section>
    )


}