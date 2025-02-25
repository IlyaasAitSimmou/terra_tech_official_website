import React, {useState} from "react";
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const contacting = async () => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phoneNumber,
                email,
                subject,
                body,
            }),
        })
        .then((res) => res.json())
            .then((resData) => {
            console.log(resData)
            if (resData.accepted) {
                setErrorMessage(resData.accepted)
            } else {
                setErrorMessage(resData.message)
            }
            })
        ;
    }

    return (
        <div className={styles.formContainer}>
            <form action='#' onSubmit={contacting} className={styles.form}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="name" className={styles.input}/>
                <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="phone number" className={styles.input}/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' className={styles.input}/>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='subject' className={styles.input}/>
                <input type="text" value={body} onChange={(e) => {
                    setBody(e.target.value)
                }
                } placeholder='body' className={styles.textarea}/>
                <button type='submit' className={styles.button}>Send Message</button>
            </form>
            <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
    )
}

export default ContactForm;