import styles from './Input.module.less';
import ErrorMsg from './ErrorMsg/ErrorMsg';

function Input({ id, name, errorText, onChange, value, placeholder }) {

/** 
 * label = desired label for the textfield
 * optional = for required or not required fields.
 * errorText = customized text for the error message that appears below.
 */

  return (
      <>
        <input
            className={`${styles.textfield} ${errorText ? styles.error : ''}`}
            type="text"
            name={name} /** name for input (key) */
            id={id} /** corresponding id for the input */
            value={value} /** value of input - usually state-managed */
            onChange={onChange} /** State-updating function when the value changes */
            placeholder={placeholder} /** Placeholder for input */
        />
        <ErrorMsg text={errorText} />
      </>
    
  );
}

export default Input

