import styles from "../styles/Home.module.css";
import Layout from "../componenets/Layout";
import NextLink from "next/link";
import {
  CardActionArea,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import data from "../componenets/Utils/data";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((prod) => (
            <Grid item md={4} key={prod.name}>
              <Card>
                <NextLink href={`/product/${prod.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={prod.image}
                      title={prod.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{prod.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${prod.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
