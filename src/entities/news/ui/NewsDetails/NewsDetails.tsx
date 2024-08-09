import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../../model/types";
import styles from "./styles.module.css";
import Image from "@/shared/ui/Image/Image";

interface Props {
  item: INews;
  type: "banner" | "item";
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a href={item.url}>Read more...</a>
        </p>
        <p>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
