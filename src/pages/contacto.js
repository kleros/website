import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "react-bootstrap";
import { injectIntl } from "gatsby-plugin-intl";
import styles from "./styles/contacto.module.css";

const Contacto = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title="Contacto - Implementar Kleros" />
    <Container className={styles.contacto} fluid>
      <section className={styles.hero}>
        <div className={styles.contactFormSection}>
          <h1 className={styles.formTitle}>Formulario de Contacto – Implementar Kleros</h1>
          <p className={styles.formDescription}>
            ¿Quieres usar Kleros para resolver disputas de forma más eficiente, transparente y accesible? 
            Completa el formulario y nuestro equipo se pondrá en contacto.
          </p>
          
          <form 
            method="post" 
            netlify-honeypot="bot-field" 
            data-netlify="true" 
            name="contacto-kleros"
            className={styles.contactForm}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contacto-kleros" />
            
            <div className={styles.formGroup}>
              <label htmlFor="nombre" className={styles.formLabel}>
                1. Nombre completo <span className={styles.required}>*</span>
              </label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                required 
                className={styles.formInput}
                placeholder="Tu nombre completo"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                2. Correo electrónico <span className={styles.required}>*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className={styles.formInput}
                placeholder="tu@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="organizacion" className={styles.formLabel}>
                3. Organización o Empresa (si aplica)
              </label>
              <input 
                type="text" 
                id="organizacion" 
                name="organizacion" 
                className={styles.formInput}
                placeholder="Nombre de tu organización"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="pais" className={styles.formLabel}>
                4. País
              </label>
              <input 
                type="text" 
                id="pais" 
                name="pais" 
                className={styles.formInput}
                placeholder="Tu país"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                5. ¿En qué sector estás interesado en aplicar Kleros?
              </label>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="finanzas" />
                  <span>Finanzas / Fintech</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="ecommerce" />
                  <span>E-commerce</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="seguros" />
                  <span>Seguros</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="gobierno" />
                  <span>Gobierno / Justicia</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="juegos" />
                  <span>Juegos y metaverso</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="daos" />
                  <span>DAOs y Web3</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="freelance" />
                  <span>Contratación freelance</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="sector" value="certificaciones" />
                  <span>Certificaciones / Validaciones</span>
                </label>
              </div>
              <input 
                type="text" 
                name="sector-otro" 
                className={styles.formInput}
                placeholder="Otro (especificar)"
                style={{ marginTop: '1rem' }}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="disputas" className={styles.formLabel}>
                6. ¿Qué tipo de disputas o procesos te gustaría resolver con Kleros?
              </label>
              <textarea 
                id="disputas" 
                name="disputas" 
                rows="4"
                className={styles.formTextarea}
                placeholder="Describe el tipo de disputas o procesos..."
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                7. ¿Qué te interesa lograr con Kleros?
              </label>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="objetivo" value="reducir-costos" />
                  <span>Reducir costos de resolución de disputas</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="objetivo" value="mejorar-experiencia" />
                  <span>Mejorar la experiencia del usuario</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="objetivo" value="automatizar" />
                  <span>Automatizar decisiones</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="objetivo" value="regulatorio" />
                  <span>Cumplir con requisitos regulatorios</span>
                </label>
                <label className={styles.checkboxLabel} style={{ textAlign: 'left', display: 'block' }}>
                  <input type="checkbox" name="objetivo" value="gobernanza" />
                  <span>Innovar en gobernanza</span>
                </label>
              </div>
              <input 
                type="text" 
                name="objetivo-otro" 
                className={styles.formInput}
                placeholder="Otro (especificar)"
                style={{ marginTop: '1rem' }}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="comentarios" className={styles.formLabel}>
                8. Comentarios o información adicional
              </label>
              <textarea 
                id="comentarios" 
                name="comentarios" 
                rows="4"
                className={styles.formTextarea}
                placeholder="Cualquier información adicional que quieras compartir..."
              />
            </div>

            <div className={styles.formButtons}>
              <button type="submit" className="btn btn-primary">Enviar</button>
              <button type="reset" className="btn btn-secondary">Limpiar</button>
            </div>
          </form>
        </div>
      </section>
    </Container>
  </Layout>
);

export default injectIntl(Contacto); 