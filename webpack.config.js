const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './main.js',
 ],
 output: {
   path: path.join(__dirname, 'public'),
   filename: 'bundle.js',
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
     {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader', 
          options: {}
        }
      ]
   },
   {
     test: /\.css$/,
     use: [ 'style-loader', 'css-loader' ] 
   }
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};