// Create web server
const app = express();
// Create a route handler for the home path
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
