"use client";

import { useState } from 'react';
import styles from '../../styles/CompanyInfo/CompanyInfo.module.css';

export interface CompanyInfoProps {
  editIconSrc: string;
  saveIconSrc: string;
  whatsappIconSrc: string;

  pageTitle: string;
  pageSubtitle: string;

  companyCardTitle: string;
  companyNameLabel: string;
  companyName: string;
  voenLabel: string;
  voen: string;
  legalAddressLabel: string;
  legalAddress: string;
  contractDateLabel: string;
  contractDate: string;

  contactCardTitle: string;
  nameLabel: string;
  specialtyLabel: string;
  phoneLabel: string;
  emailLabel: string;
  contactName: string;
  contactSpecialty: string;
  contactPhone: string;
  contactEmail: string;
  saveButtonText: string;
  onSaveContact?: (data: {
    name: string;
    specialty: string;
    phone: string;
    email: string;
  }) => void;

  managerCardTitle: string;
  salesManagerLabel: string;
  salesManagerName: string;
  contactNumberLabel: string;
  managerPhone: string;
  whatsappButtonText: string;
  onWhatsappClick?: () => void;
}

export const CompanyInfo = ({
  editIconSrc,
  saveIconSrc,
  whatsappIconSrc,
  pageTitle,
  pageSubtitle,
  companyCardTitle,
  companyNameLabel,
  companyName,
  voenLabel,
  voen,
  legalAddressLabel,
  legalAddress,
  contractDateLabel,
  contractDate,
  contactCardTitle,
  nameLabel,
  specialtyLabel,
  phoneLabel,
  emailLabel,
  contactName,
  contactSpecialty,
  contactPhone,
  contactEmail,
  saveButtonText,
  onSaveContact,
  managerCardTitle,
  salesManagerLabel,
  salesManagerName,
  contactNumberLabel,
  managerPhone,
  whatsappButtonText,
  onWhatsappClick,
}: CompanyInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contactName);
  const [specialty, setSpecialty] = useState(contactSpecialty);
  const [phone, setPhone] = useState(contactPhone);
  const [email, setEmail] = useState(contactEmail);

  const handleSave = () => {
    onSaveContact?.({ name, specialty, phone, email });
    setIsEditing(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
        <p className={styles.pageSubtitle}>{pageSubtitle}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>{companyCardTitle}</p>

          <div className={styles.fieldStack}>
            <div className={styles.field}>
              <p className={styles.fieldLabel}>{companyNameLabel}</p>
              <p className={styles.fieldValue}>{companyName}</p>
            </div>
            <div className={styles.field}>
              <p className={styles.fieldLabel}>{voenLabel}</p>
              <p className={styles.fieldValue}>{voen}</p>
            </div>
            <div className={styles.field}>
              <p className={styles.fieldLabel}>{legalAddressLabel}</p>
              <p className={styles.fieldValue}>{legalAddress}</p>
            </div>
            <div className={styles.field}>
              <p className={styles.fieldLabel}>{contractDateLabel}</p>
              <p className={styles.fieldValue}>{contractDate}</p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.cardHeaderRow}>
              <p className={styles.cardTitle}>{contactCardTitle}</p>
              {isEditing ? (
                <button type="button" onClick={handleSave} className={styles.saveButton}>
                  <span>{saveButtonText}</span>
                  <img src={saveIconSrc} alt="" className={styles.actionIcon} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className={styles.editButton}
                  aria-label={saveButtonText}
                >
                  <img src={editIconSrc} alt="" className={styles.actionIcon} />
                </button>
              )}
            </div>

            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>{nameLabel}</p>
                {isEditing ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Yazın"
                    className={styles.fieldInput}
                  />
                ) : (
                  <p className={styles.fieldValue}>{name}</p>
                )}
              </div>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>{specialtyLabel}</p>
                {isEditing ? (
                  <input
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    placeholder="Yazın"
                    className={styles.fieldInput}
                  />
                ) : (
                  <p className={styles.fieldValue}>{specialty}</p>
                )}
              </div>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>{phoneLabel}</p>
                {isEditing ? (
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Yazın"
                    className={styles.fieldInput}
                  />
                ) : (
                  <p className={styles.fieldValue}>{phone}</p>
                )}
              </div>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>{emailLabel}</p>
                {isEditing ? (
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Yazın"
                    className={styles.fieldInput}
                  />
                ) : (
                  <p className={styles.fieldValue}>{email}</p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeaderRow}>
              <p className={styles.cardTitle}>{managerCardTitle}</p>
              <button type="button" onClick={onWhatsappClick} className={styles.whatsappButton}>
                <span>{whatsappButtonText}</span>
                <img src={whatsappIconSrc} alt="" className={styles.actionIcon} />
              </button>
            </div>

            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>{salesManagerLabel}</p>
                <p className={styles.fieldValue}>{salesManagerName}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>{contactNumberLabel}</p>
                <p className={styles.fieldValue}>{managerPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};