import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./DynamicForm.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const firstFieldVal = watch("fieldOne", "");
  const [submitMarker, setSubmitMarker] = useState(false);

  function onSubmit(val) {
    if (isValid) {
      reset();
      setSubmitMarker(true);
    } else {
      console.log(val);
    }
  }

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => {
        setSubmitMarker(false);
      }}
    >
      <label htmlFor="fieldOne" className={styles.inputLabel}>
        First field
      </label>
      <input
        type="text"
        id="fieldOne"
        className={styles.inputField}
        {...register("fieldOne", {
          required: "Fill in this field",
          minLength: {
            value: 5,
            message: "The field must be 5 chars or more",
          },
        })}
      />
      {errors.fieldOne && (
        <p className={styles.errorMsg}>{errors.fieldOne.message}</p>
      )}
      {firstFieldVal.length >= 5 && (
        <>
          <label htmlFor="fieldTwo" className={styles.inputLabel}>
            Second field
          </label>
          <input
            type="text"
            id="fieldTwo"
            className={styles.inputField}
            {...register("fieldTwo", {
              required: "Fill in this field",
            })}
          />
          {errors.fieldTwo && (
            <p className={styles.errorMsg}>{errors.fieldTwo.message}</p>
          )}
        </>
      )}
      <input type="submit" value="Submit" className={styles.submitBtn} />
      {submitMarker && (
        <p className={styles.submitMsg}>Form successfully submitted!</p>
      )}
    </form>
  );
}

export default DynamicForm;
