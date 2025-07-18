const express = require('express');
const mongoose = require('mongoose'); // fixed typo
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require ('./routes/auth/auth-routes')
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");





const shopProductsRouter = require("./routes/shop/products-routes")
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");



dotenv.config();



mongoose.connect(
    'mongodb+srv://ksapan73:N7d83rc0KR1AxgJM@cluster0.pmbvsgq.mongodb.net/'
).then(() => console.log('MongoDB Connected'))
 .catch((error) => console.log(error)); // fixed typo

const app = express();
const PORT = process.env.PORT || 5000; // fixed this line for .PORT

app.use(
    cors({ 
        origin: ['http://localhost:5173',
              "https://the-losspollo-frontend.vercel.app",],

        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter)
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);






app.use("/api/shop/products", shopProductsRouter)
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/shop/search", shopSearchRouter);

app.use("/api/common/feature", commonFeatureRouter);




app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
