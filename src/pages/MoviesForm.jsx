import { Formik, Field, Form } from 'formik'
import styles from '../components/Movies.module.css'
export function MoviesForm({onSubmit}) {
    return (
     <Formik initialValues={{ name: '' }} onSubmit={onSubmit} >
            <Form className={styles.form}>
                    <Field name="name" placeholder="Search movie" type="text" autoFocus className={styles.form_input}/>
                <button type="submit" className={styles.form_button}>Search</button>
            </Form>
            </Formik>
      //   <input
      //   type="text"
      //   value={value}
      //   onChange={(e) => onChange(e.target.value)}
      // />
 )   
}

