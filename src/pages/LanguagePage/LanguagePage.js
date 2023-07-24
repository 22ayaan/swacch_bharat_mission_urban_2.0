import React from "react";
import styles from "./Style.module.css";
import DescriptionSection from "./DescriptionSection";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const LanguagePage = () => {
  return (
    <>
      <div className={styles.languagecontainer}>
        <div className={styles.upperComp}>
          <div className={styles.header}>
            <p>LANGUAGE</p>
          </div>
          <select className={styles.langOptions} id="langOptions">
            <option value="default" selected="true">
              Select Language
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="gu">Gujarati</option>
          </select>
          <DescriptionSection />
        </div>
        <div className={styles.lowerComp}>
          <Link to="/geo">
            <Button className="continueBtn" text="Continue" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LanguagePage;
