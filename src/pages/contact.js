import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Modal } from "react-bootstrap";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import styles from "./styles/contacto.module.css";

// Form data constants that will be populated from i18n
const getSectorOptions = (intl) => [
  { value: "finanzas", label: intl.formatMessage({ id: "contact.form.sectors.finanzas" }) },
  { value: "ecommerce", label: intl.formatMessage({ id: "contact.form.sectors.ecommerce" }) },
  { value: "seguros", label: intl.formatMessage({ id: "contact.form.sectors.seguros" }) },
  { value: "gobierno", label: intl.formatMessage({ id: "contact.form.sectors.gobierno" }) },
  { value: "juegos", label: intl.formatMessage({ id: "contact.form.sectors.juegos" }) },
  { value: "daos", label: intl.formatMessage({ id: "contact.form.sectors.daos" }) },
  { value: "freelance", label: intl.formatMessage({ id: "contact.form.sectors.freelance" }) },
  { value: "certificaciones", label: intl.formatMessage({ id: "contact.form.sectors.certificaciones" }) },
];

const getObjectiveOptions = (intl) => [
  { value: "reducir-costos", label: intl.formatMessage({ id: "contact.form.objectives.reducir-costos" }) },
  { value: "mejorar-experiencia", label: intl.formatMessage({ id: "contact.form.objectives.mejorar-experiencia" }) },
  { value: "automatizar", label: intl.formatMessage({ id: "contact.form.objectives.automatizar" }) },
  { value: "regulatorio", label: intl.formatMessage({ id: "contact.form.objectives.regulatorio" }) },
  { value: "gobernanza", label: intl.formatMessage({ id: "contact.form.objectives.gobernanza" }) },
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
const ConfirmationModal = ({ show, onHide, intl }) => (
  <Modal show={show} onHide={onHide} centered backdropClassName={styles.modalBackdrop} dialogClassName={styles.modalDialog} contentClassName={styles.modalContent}>
    <Modal.Header className={styles.modalHeader}>
      <Modal.Title className={styles.modalTitle}>
        <FormattedMessage id="contact.form.modal.title" />
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className={styles.modalBody}>
      <p>
        <FormattedMessage id="contact.form.modal.message" />
      </p>
      <p>
        <FormattedMessage id="contact.form.modal.message-2" />
      </p>
    </Modal.Body>
    <Modal.Footer className={styles.modalFooter}>
      <Link to="/" className={styles.modalButton}>
        <FormattedMessage id="contact.form.modal.button" />
      </Link>
    </Modal.Footer>
  </Modal>
);

const Contact = ({ intl }) => {
  const [showModal, setShowModal] = useState(false);
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
      alert(intl.formatMessage({ id: "contact.form.error" }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const sectorOptions = getSectorOptions(intl);
  const objectiveOptions = getObjectiveOptions(intl);

  // Determine form name based on locale
  const formName = intl.locale === "es" ? "contacto-kleros" : "contact-kleros";

  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "contact.seo-title" })} />
      <Container className={styles.contacto} fluid>
        <section className={styles.hero}>
          <div className={styles.contactFormSection}>
            <h1 className={styles.formTitle}>
              <FormattedMessage id="contact.form.title" />
            </h1>
            <p className={styles.formDescription}>
              <FormattedMessage id="contact.form.description" />
              <br />
              <br />
              <FormattedMessage id="contact.form.description-2" />
            </p>

            <form onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true" name={formName} className={styles.contactForm}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value={formName} />

              <FormField id="nombre" name="nombre" label={intl.formatMessage({ id: "contact.form.fields.full-name.label" })} required placeholder={intl.formatMessage({ id: "contact.form.fields.full-name.placeholder" })} />

              <FormField id="email" name="email" type="email" label={intl.formatMessage({ id: "contact.form.fields.email.label" })} required placeholder={intl.formatMessage({ id: "contact.form.fields.email.placeholder" })} />

              <FormField id="organizacion" name="organizacion" label={intl.formatMessage({ id: "contact.form.fields.organization.label" })} placeholder={intl.formatMessage({ id: "contact.form.fields.organization.placeholder" })} />

              <FormField id="pais" name="pais" label={intl.formatMessage({ id: "contact.form.fields.country.label" })} placeholder={intl.formatMessage({ id: "contact.form.fields.country.placeholder" })} />

              <CheckboxGroup name="sector" label={intl.formatMessage({ id: "contact.form.fields.sector.label" })} options={sectorOptions} otherFieldName="sector-otro" otherPlaceholder={intl.formatMessage({ id: "contact.form.fields.sector.other-placeholder" })} />

              <FormField id="disputas" name="disputas" type="textarea" label={intl.formatMessage({ id: "contact.form.fields.disputes.label" })} placeholder={intl.formatMessage({ id: "contact.form.fields.disputes.placeholder" })} rows={4} />

              <CheckboxGroup name="objetivo" label={intl.formatMessage({ id: "contact.form.fields.objectives.label" })} options={objectiveOptions} otherFieldName="objetivo-otro" otherPlaceholder={intl.formatMessage({ id: "contact.form.fields.objectives.other-placeholder" })} />

              <FormField id="comentarios" name="comentarios" type="textarea" label={intl.formatMessage({ id: "contact.form.fields.comments.label" })} placeholder={intl.formatMessage({ id: "contact.form.fields.comments.placeholder" })} rows={4} />

              <div className={styles.formButtons}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? intl.formatMessage({ id: "contact.form.buttons.submit-loading" }) : intl.formatMessage({ id: "contact.form.buttons.submit" })}
                </button>
                <button type="reset" className="btn btn-secondary" disabled={isSubmitting}>
                  <FormattedMessage id="contact.form.buttons.clear" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </Container>

      <ConfirmationModal show={showModal} onHide={handleCloseModal} intl={intl} />
    </Layout>
  );
};

export default injectIntl(Contact);
