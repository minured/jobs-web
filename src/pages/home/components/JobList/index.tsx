import { Job } from "src/types/interface";
import styles from "./index.scss";

interface JobListProps {
    jobs: Job[];
}

const JobList = (props: JobListProps) => {
    const { jobs } = props;

    return (
        <div className={styles.M_jobs}>
            {jobs.map((job) => (
                <div className={styles.job_item} key={job.id}>
                    <div className={styles.main_row}>
                        <span className={styles.title}>{job.name}</span>
                        <span className={styles.salary}>{job.salary}</span>
                    </div>
                    <div className={styles.tags_row}>
                        {job.tags.map((tag) => (
                            <span className={styles.tab_item} key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.company_row}>
                        <img
                            className={styles.log}
                            src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.05sun.com%2Fattachment%2Fsoft%2F2021%2F1014%2F162546_30641004.png&refer=http%3A%2F%2Fimg.05sun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661165210&t=4b59fedf9f920d19a1ec38d07353d5b1'
                            alt='logo'
                        />
                        <div className={styles.company_info}>
                            <span className={styles.company_name}>
                                {job.company.name}
                            </span>
                            <span className={styles.publish_time}>
                                7月23日发布
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobList;
