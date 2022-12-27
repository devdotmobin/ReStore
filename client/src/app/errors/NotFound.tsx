import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Oops - we could not find what you are looking for.
      </Typography>
      <Divider />
      <Button fullWidth LinkComponent={Link} href="/catalog">
        GO back to shop
      </Button>
    </Container>
  );
};

export default NotFound;
