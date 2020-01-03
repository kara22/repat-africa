import { Grid } from '@material-ui/core'

const Content = () => (
  <div>
    <Grid
      container
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} align="center">
        <h1 className="main-title">
          Participons à l'Afrique de demain
        </h1>
      </Grid>
      <Grid item xs={12} align="center">
        <p className="main-subtitle">
          Inscrivez-vous à la newsletter afin d'être averti.e du lancement de la plateforme
        </p>
      </Grid>
    </Grid>
</div>
)

export default Content;
