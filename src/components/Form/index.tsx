import React from "react";

import Select, { MultiValue } from "react-select";
import { useDispatch } from "react-redux";

import { setSelectedAreas, setSelectedCompanies } from "@store/home";
import { useAppSelector } from "@store/hooks";

import styles from "@styles/components/form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const { companies, areas } = useAppSelector((state) => state.home);

  return (
    <div className={styles.form}>
      <h2 className={styles.form__title}>Partner Matching</h2>

      <div className={styles.form__selection}>
        <Select
          className={styles.form__select}
          isMulti
          closeMenuOnSelect={false}
          options={companies.map((item) => ({
            label: item.name,
            value: item.companyId,
          }))}
          onChange={(selectedOptions) => {
            if (Array.isArray(selectedOptions)) return;

            const values = selectedOptions as MultiValue<{
              label: string;
              value: number;
            }>;

            dispatch(setSelectedCompanies(values.map((item) => item.value)));
          }}
        />

        <Select
          className={styles.form__select}
          isMulti
          closeMenuOnSelect={false}
          options={areas.map((item) => ({
            label: item.state,
            value: item.areaId,
          }))}
          onChange={(selectedOptions) => {
            if (Array.isArray(selectedOptions)) return;

            const values = selectedOptions as MultiValue<{
              label: string;
              value: number;
            }>;

            dispatch(setSelectedAreas(values.map((item) => item.value)));
          }}
        />
      </div>
    </div>
  );
};

export default Form;
