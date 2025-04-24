import EmailIcon from '../icons/email-icon';
import LocationIcon from '../icons/location-icon';
import PhoneIcon from '../icons/phone-icon';

const ContactInfo = () => {
    return (
        <div className='contact-info-wrap'>
            <ul className='contact-list-wrap'>
                <li>
                    <div className='icon'>
                        <LocationIcon />
                    </div>
                    <div className='content'>
                        <h4 className='title'>Address</h4>
                        <p>
                            Awamileaug Drive, Kensington <br /> London, UK
                        </p>
                    </div>
                </li>
                <li>
                    <div className='icon'>
                        <PhoneIcon />
                    </div>
                    <div className='content'>
                        <h4 className='title'>Phone</h4>
                        <a href='tel:0123456789'>+1 (800) 123 456 789</a>
                        <a href='tel:0123456789'>+1 (800) 123 456 789</a>
                    </div>
                </li>
                <li>
                    <div className='icon'>
                        <EmailIcon />
                    </div>
                    <div className='content'>
                        <h4 className='title'>E-mail Address</h4>
                        <a href='mailto:info@gmail.com'>info@gmail.com</a>
                        <a href='mailto:info@gmail.com'>info@gmail.com</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;