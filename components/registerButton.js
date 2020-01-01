import Button from '@material-ui/core/Button';
import Link from 'next/link'
import { Grid } from '@material-ui/core'

const RegisterButton = () => (
  <div>
    <Grid
      mt={2}
      container
      justify="center"
      alignItems="center"
    >
      <Link href="https://repat-africa.typeform.com/to/R7BoBO">
        <a target="_blank" style={{textDecoration: "none"}}>
          <Button
            className="register-button"
            variant="contained" 
            color="primary"
            size="large"
          >
            Je veux être averti.e
          </Button>
        </a>
      </Link>
      
    </Grid>
  </div>
)

export default RegisterButton;