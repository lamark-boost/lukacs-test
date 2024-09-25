import styles from "./body.module.css";


type Props = {
    headline: string,
    body: string,
};

const Body: React.FC<Props> = ({headline, body}) => {

    return (
        <div className={styles.bodyClass}>
            <div className="container">
                <h3>{headline}</h3>
                <p>{body}</p>
            </div>

        </div>
    )
};

export default Body;