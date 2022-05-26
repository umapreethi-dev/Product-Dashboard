import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Product(props) {
  const navigate = useNavigate();
  return (
    <div className="product-card" key={props.id}>
      <Card sx={{ maxWidth: 300 }} className="product-card">
        <CardMedia
          className="product-image"
          component="img"
          alt={props.name}
          image={props.image}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography>{props.price}$</Typography>
          <Typography>⭐{props.rating}</Typography>
        </CardContent>
        <CardActions className="buttons">
          <div className="buttons">
            {props.deleteButton}
            {props.editButton}
          </div>
          <div className="buttons">
            <Button
              size="small"
              variant="text"
              onClick={() => navigate(`product/${props.id}`)}
            >
              LEARN MORE
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
