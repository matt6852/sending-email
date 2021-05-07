import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Yandexmap from "../components/Yandexmap";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      phone,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setSubmitted(true);
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className ={styles.center_2}>
        <h2>Яндекс карта</h2>
      </div>

      <div className={styles.center}>
        <Yandexmap />
      </div>
      {submitted ? (
        <div>
          <h1>
            Спасибо за то что выбрали нас мы свяжимся с вами в ближаещее время
            <button onClick={() => setSubmitted(false)}>закрыть</button>
          </h1>
        </div>
      ) : (
        <form className={styles.main}>
          <div> <h2>
            Регистрация
          </h2>
          </div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className={styles.inputField}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="number">Phone</label>
          <input
            type="tel"
            name="number"
            value={phone}
            className={styles.inputField}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className={styles.inputField}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input onClick={(e) => handleSubmit(e)} type="submit" />
        </form>
      )}
    </div>
  );
}
