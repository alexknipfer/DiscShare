import { Card, Grid } from 'semantic-ui-react'

import React from 'react'

const Login = () => {
  return (
    <div className="center-login-card">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Content header="Login" />
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <style jsx>{`
        .center-login-card {
          margin-top: 100px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Login
