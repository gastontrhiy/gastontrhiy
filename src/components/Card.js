const Card = ({ data }) => {
  return (
    <ion-card>
      <ion-card-header>
        {data.title != "" ? <ion-card-title>{data.title}</ion-card-title> : ""}
      </ion-card-header>
      <ion-card-content>
        {data.content != "" ? data.content : ""}
      </ion-card-content>
    </ion-card>
  );
};

export default Card;
