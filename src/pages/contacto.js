import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Modal, Button } from "react-bootstrap";
import { injectIntl, Link } from "gatsby-plugin-intl";
import styles from "./styles/contacto.module.css";

// Form data constants
const SECTOR_OPTIONS = [
  { value: "finanzas", label: "Finanzas / Fintech" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "seguros", label: "Seguros" },
  { value: "gobierno", label: "Gobierno / Justicia" },
  { value: "juegos", label: "Juegos y metaverso" },
  { value: "daos", label: "DAOs y Web3" },
  { value: "freelance", label: "Contratación freelance" },
  { value: "certificaciones", label: "Certificaciones / Validaciones" },
];

const OBJETIVO_OPTIONS = [
  { value: "reducir-costos", label: "Reducir costos de resolución de disputas" },
  { value: "mejorar-experiencia", label: "Mejorar la experiencia del usuario" },
  { value: "automatizar", label: "Automatizar decisiones" },
  { value: "regulatorio", label: "Cumplir con requisitos regulatorios" },
  { value: "gobernanza", label: "Innovar en gobernanza" },
];

// Reusable FormField component
const FormField = ({ id, name, type = "text", label, required = false, placeholder, rows, className }) => {
  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.formLabel}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <InputComponent type={isTextarea ? undefined : type} id={id} name={name} required={required} className={isTextarea ? styles.formTextarea : styles.formInput} placeholder={placeholder} rows={rows} />
    </div>
  );
};

// Reusable CheckboxGroup component
const CheckboxGroup = ({ name, label, options, otherFieldName, otherPlaceholder }) => (
  <div className={styles.formGroup}>
    <label className={styles.formLabel}>{label}</label>
    <div className={styles.checkboxGroup}>
      {options.map(({ value, label: optionLabel }) => (
        <label key={value} className={styles.checkboxLabel}>
          <input type="checkbox" name={name} value={value} />
          <span>{optionLabel}</span>
        </label>
      ))}
    </div>
    <input type="text" name={otherFieldName} className={`${styles.formInput} ${styles.otherInput}`} placeholder={otherPlaceholder} />
  </div>
);

// Confirmation Modal component
const ConfirmationModal = ({ show, onHide }) => (
  <Modal 
    show={show} 
    onHide={onHide} 
    centered
    backdropClassName={styles.modalBackdrop}
    dialogClassName={styles.modalDialog}
    contentClassName={styles.modalContent}
  >
    <Modal.Header className={styles.modalHeader}>
      <Modal.Title className={styles.modalTitle}>¡Gracias!</Modal.Title>
    </Modal.Header>
    <Modal.Body className={styles.modalBody}>
      <p>Hemos recibido su envío del formulario.</p>
      <p>Nos pondremos en contacto a la brevedad.</p>
    </Modal.Body>
    <Modal.Footer className={styles.modalFooter}>
      <Link 
        to="/"
        className={styles.modalButton}
      >
        Volver a la Página de Inicio
      </Link>
    </Modal.Footer>
  </Modal>
);

const Contacto = ({ intl }) => {
  const [showModal, setShowModal] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <SEO lang={intl.locale} title="Contacto - Implementar Kleros" />
      <Container className={styles.contacto} fluid>
        <section className={styles.hero}>
          <div className={styles.contactFormSection}>
            <h1 className={styles.formTitle}>Formulario de Contacto – Implementar Kleros</h1>
            <p className={styles.formDescription}>
              ¿Quieres usar Kleros para resolver disputas de forma más eficiente, transparente y accesible?
              <br />
              <br />
              Completa el formulario y nuestro equipo se pondrá en contacto.
            </p>

            <form onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contacto-kleros" className={styles.contactForm}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contacto-kleros" />

              <FormField id="nombre" name="nombre" label="1. Nombre completo" required placeholder="Tu nombre completo" />

              <FormField id="email" name="email" type="email" label="2. Correo electrónico" required placeholder="tu@email.com" />

              <FormField id="organizacion" name="organizacion" label="3. Organización o Empresa (si aplica)" placeholder="Nombre de tu organización" />

              <FormField id="pais" name="pais" label="4. País" placeholder="Tu país" />

              <CheckboxGroup name="sector" label="5. ¿En qué sector estás interesado en aplicar Kleros?" options={SECTOR_OPTIONS} otherFieldName="sector-otro" otherPlaceholder="Otro (especificar)" />

              <FormField id="disputas" name="disputas" type="textarea" label="6. ¿Qué tipo de disputas o procesos te gustaría resolver con Kleros?" placeholder="Describe el tipo de disputas o procesos..." rows={4} />

              <CheckboxGroup name="objetivo" label="7. ¿Qué te interesa lograr con Kleros?" options={OBJETIVO_OPTIONS} otherFieldName="objetivo-otro" otherPlaceholder="Otro (especificar)" />

              <FormField id="comentarios" name="comentarios" type="textarea" label="8. Comentarios o información adicional" placeholder="Cualquier información adicional que quieras compartir..." rows={4} />

              <div className={styles.formButtons}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
                <button type="reset" className="btn btn-secondary" disabled={isSubmitting}>
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </section>
      </Container>

      <ConfirmationModal show={showModal} onHide={handleCloseModal} />
    </Layout>
  );
};

export default injectIntl(Contacto);
