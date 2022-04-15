import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"

export default function Product(props) {
    const navigate = useNavigate();
  return (
    <div className="product-card" key={props.id}>
      <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          component="img"
          alt={props.name}
          height="200"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography>
              {props.price}$ 
          </Typography>
          <Typography>
            ⭐⭐⭐⭐⭐{props.rating}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined"
          onClick={() => navigate(`product/${props.id}`)}
          >LEARN MORE</Button>
         
        </CardActions>
      </Card>
    </div>
  );
}
