import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from '../components/Movies.module.css'
export function SharedLayout() {
    return (
        <div>
            <nav className={styles.nav}>
        <Link to="/" className={styles.nav_link}>Home</Link>
        <Link to="/movies" className={styles.nav_link}>Movies</Link>
            </nav>
            <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
        </div>
    )
}