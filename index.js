const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const colors = require("colors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const FormData = require("form-data");

const fs = require("fs");

app.use(cors());
app.use(express.json());

// Connecting to the database
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Database connected successfully!".bgBlue.bold);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Set up multer for file upload
const upload = multer({ dest: "uploads/" });

app.post("/upload-pdf", upload.single("pdf_file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    // Create a new FormData instance and append the file
    const formData = new FormData();
    formData.append(
      "pdf_file",
      fs.createReadStream(file.path),
      file.originalname
    );

    // Make the request to the external API
    const response = await axios.post(
      "https://api24.pythonanywhere.com/ext/monir",
      formData,
      {
        headers: {
          ...formData.getHeaders(), // Include the headers generated by FormData
        },
      }
    );

    // Cleanup the uploaded file from the server
    fs.unlinkSync(file.path);

    // Send the response from the external API back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error uploading file:", error.message);
    res.status(500).send("Something went wrong.");
  }
});

app.get("/api/nid", async (req, res) => {
  const { nid, dob } = req.query;
  console.log("nid and dob", nid, dob);
  try {
    // https://api.foxithub.com/unofficial/api.php?key=signCopy&nid=6911297726&dob=1999-10-21
    const fetch = (await import("node-fetch")).default;
    // const response = await fetch(
    //   `https://apiportal.gallego24.xyz/nid?ApiKey=RnVCTEpSYWtJSUw0QVdVM01YVFF4MGwxY0VkQlpqUXpjVkpFV0RoQlVFMUxObmM0Tm5jOVBRPT0=&nid=${nid}&dob=${dob}`
    // );

    const response = await fetch(
      `https://api.foxithub.com/unofficial/api.php?key=signCopy&nid=${nid}&dob=${dob}`
    );
    const data = await response.json();
    console.log("data", data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/api/nid2", async (req, res) => {
  const { nid, dob } = req.query;
  console.log("nid and dob", nid, dob);
  try {
    // https://api.foxithub.com/unofficial/api.php?key=signCopy&nid=6911297726&dob=1999-10-21
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://api.rafixt.xyz/server.php?nid=${nid}&dob=${dob}`
    );
    const data = await response.json();
    console.log("data", data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const usersRoutes = require("./routes/users.routes");
const bikashInfoOrdersRoutes = require("./routes/bikashInfoOrder.routes");
const orderNIdsRoutes = require("./routes/orderNId.routes");
const bikashPinResetRoutes = require("./routes/bikashPinReset.routes");
const callListOrdersRoutes = require("./routes/callListOrder.routes");
const birthCertificateFixRoutes = require("./routes/birthCertificateFix.routes");
const biometricOrderRoutes = require("./routes/biometricOrder.routes");
const nogodInfoOrderRoutes = require("./routes/nogodInfoOrder.routes");
const onlineBirthCertificateRoutes = require("./routes/onlineBirthCertificate.routes");
const rechargesRoutes = require("./routes/recharge.routes");
const saftyTikaRoutes = require("./routes/saftyTika.routes");
const serverCopysRoutes = require("./routes/serverCopy.routes");
const bikashPaymentRoutes = require("./routes/bkashPayment.routes");
const nidMakeRoutes = require("./routes/nidMake.routes");
const priceListRoutes = require("./routes/priceList.routes");
const signCopyRoutes = require("./routes/signCopy.routes");
const manageOrderButtonRoutes = require("./routes/manageOrderButton.routes");
const { default: axios } = require("axios");

app.use("/signCopy", signCopyRoutes);
app.use("/priceList", priceListRoutes);
app.use("/api/bkash", bikashPaymentRoutes);
app.use("/users", usersRoutes);
app.use("/bikashInfoOrders", bikashInfoOrdersRoutes);
app.use("/nogodInfoOrders", nogodInfoOrderRoutes);
app.use("/orderNIds", orderNIdsRoutes);
app.use("/bikashPinResets", bikashPinResetRoutes);
app.use("/callListOrders", callListOrdersRoutes);
app.use("/birthCertificateFixs", birthCertificateFixRoutes);
app.use("/biometricOrders", biometricOrderRoutes);
app.use("/onlineBirthCertificates", onlineBirthCertificateRoutes);
app.use("/recharges", rechargesRoutes);
app.use("/saftyTikas", saftyTikaRoutes);
app.use("/serverCopys", serverCopysRoutes);
app.use("/nidMakes", nidMakeRoutes);
app.use("/manage-order-button", manageOrderButtonRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
