# Using Aurora with Node

This project is a proof of concept using a application that uses a MySQL DB and converting it over to use amazon
AWS Aurora.

Amazon AWS Aurora is a specific RDS within Amazon's RDS selection that is compatible with a MySQL Database. Supposed
advantages of Aurora is speed and scalability as well as amazon will handle server maintenance as a service.
 
## Logic
As this project was generated with hottowel-generator, All the logic for this project is in the routes.js
([link here](src/server/routes.js)) file under the server side code. You will need access to the amazon RDS instance to 
use the specific endpoint, username,password, specific DB name, the port number, and authorized access granted by the 
security group on the amazon service console.

The main logic uses the npm package 'mysql' as the node driver to connect to our MySQL database which is fairly simple 
in itself. I have commented to code to give you a better idea of what is happening.

## More documentation
[Amazon Aurora](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.rds.html)
Will give you a good idea on how to go about connecting everything

[Node MySQL](https://www.npmjs.com/package/mysql)
documentation on the node-mysql plugin
