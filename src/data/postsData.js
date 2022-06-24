const publications = [
    {
      "_id": 1,
      "title": "Identifying Parking Lots from Satellite Images using Transfer Learning",
      "body": "Shushant Kumar (National Institute of Technology Karnataka, India); Edwin Thomas(National Institute of Technology Karnataka, India); Anmol Horo(National Institute of Technology Karnataka, India)"
    },
    {
      "_id": 2,
      "title": "Image Captioning With CNN",
      "body": "Rutuja Magar(Savitribai phule pune university, India);Thasken Parvat(Savitribai phule pune university, India)"
    },
    {
      "_id": 3,
      "title": "A Robust Model for Churn Prediction using Supervised Machine Learning",
      "body": "Anurag Bhatnagar(Manipal University Jaipur, India); Dr Sumit Srivastava(Manipal University Jaipur, India)"
    },
    {
      "_id": 4,
      "title": "Regression Model for Better Generalization and Regression Analysis",
      "body": "Mohiuddeen Khan(Aligarh Muslim University, India); Kanishk Srivastava(Portland State University,USA)"
    },
    {
      "_id": 5,
      "title": "Optimisation of quicklime production from eggshell using Surface response Methodology",
      "body": "Salisu Nuhu(Hussaini Adamu Federal Polytechnic Kazaure jigawa state, Nigeria)"
    },
    {
      "_id": 6,
      "title": "Secured Authentication Systems for Internet of Things: A Survey",
      "body": "Gowtham M(National Institute of Engineering and Institute of Technology, India)"
    },
    {
      "_id": 7,
      "title": "Analysis of Data deduplication with co-ordinate and cloud storage service checksum",
      "body": "Suresh L(BMSIT&M ,Bangalore, India);Dr . Bharathi Ma(BMSIT&M ,Bangalore, India)"
    },
    {
      "_id": 8,
      "title": "Detection of Uterine Fibroid using Machine Learning Approach: A Survey",
      "body": "Harshitha R(AMC Engineering College, India); Heena Taj(AMC Engineering College, India); Dhanalakshmi R(AMC Engineering College, India); Asha S Manek(AMC Engineering College, India);Vineeta Mishra(AMC Engineering College, India)"
    },
    {
      "_id": 9,
      "title": "New Fusion Algorithm provides an alternative approach to Robotic Path planning",
      "body": "Ashutosh Kumar Tiwari(BMS college of Engineering, India);Sandeep Varma Nadimpalli(BMS college of Engineering, India)"
    },
    {
      "_id": 10,
      "title": "Review On A Novel Approach For Soil Fertility and Crop Friendliness Detection and Monitoring",
      "body": "Varshitha D N(Sir M. Visvesvaraya Institute of Technology, India);Dr Savitha Choudhary(Sir M. Visvesvaraya Institute of Technology, India)"
    },
    {
      "_id": 11,
      "title": "Learning semantic relationships of images with Knowledge Graph Embedding",
      "body": "Ashutosh Kumar Tiwari(BMS college of Engineering, India);Sandeep Varma Nadimpalli(BMS college of Engineering, India)"
    },
    {
      "_id": 12,
      "title": "Synthetic data generation through DataGenie",
      "body": "Gaurav Saxena(HCL, India);Aakash Gupta(HCL, India)"
    },
    {
      "_id": 13,
      "title": "Detection of Pediatric Pneumonia from Chest X-Ray Images using CNN and Transfer Learning",
      "body": "Gaurav Labhane(Indian Institute of Information Technology Pune, India);Rutuja Pansare(Indian Institute of Information Technology Pune, India);Saumil Mahaeshwari(Indian Institute of Information Technology Pune, India);Ritu Tiwari(Indian Institute of Information Technology Pune, India);Anupam Shukla(Indian Institute of Information Technology Pune, India)"
    },
    {
      "_id": 14,
      "title": "Convolutional Neural Networks and Transfer Learning based approach to classify White Blood Cells",
      "body": "Rutuja Pansare(Indian Institute of Information Technology Pune, India);Saumil Maheshwari(Indian Institute of Information Technology Pune, India);Ritu Tiwari(Indian Institute of Information Technology Pune, India);Anupam Shukla(Indian Institute of Information Technology Pune, India)"
    },
    {
      "_id": 15,
      "title": "Big Data in Telecom Industry: Effective Predictive Techniques on CDRs",
      "body": "Sara Elelimy (Skoltech, Russia);Samir Moustafa(Skoltech, Russia)"
    },
    {
      "_id": 16,
      "title": "Wheelchair control and home automation using hand gestures",
      "body": "Nithya B G(Global Academy of Technology, Bengaluru, India);Thejas B K(Global Academy of Technology, Bengaluru, India);Thanush R(Global Academy of Technology, Bengaluru, India);Sanjay S(Global Academy of Technology, Bengaluru, India);Venugeetha Y(Global Academy of Technology, Bengaluru, India)"
    },
    {
      "_id": 17,
      "title": "Automatic Subtitle Generation for Videos",
      "body": "Aditya Ramani(PES University, India);Asmita Rao(PES University, India);Vidya V(PES University, India);V R Badri Prasad(PES University, India)"
    },
    {
      "_id": 18,
      "title": "An Improved Demand Forecasting with Limited Historical Sales Data",
      "body": "Rajasekhar Kalla(Sri Venkateswara University, India);Abbaiah Rambe(Sri Venkateswara University, India);Hemasekhar Palla(Sri Venkateswara University, India)"
    },
    {
      "_id": 19,
      "title": "Surveillance and Black Box for Car",
      "body": "Gagana B R(Vidyavardhaka College of Engineering, Mysore, India)"
    },
    {
      "_id": 20,
      "title": "Regression model enhancement using combination of MARS and factor analysis",
      "body": "Amiya Chakrabarty(HCL Technologies, India)"
    },
    {
      "_id": 21,
      "title": "Study of different modalities in the detection of Rheumatoid Arthritis",
      "body": "Mahesh Kumar A S(PES College of Engineering Mandya, India);Dr.Mallikarunaswamy M S(JSS STU Mysuru, India)"
    },
    {
      "_id": 22,
      "title": "Protecting and Securing Sensitive Data in a Big Data Computing Environment",
      "body": "Praveen Banasode(Jain College of Engineering, Belagavi, India);Sunita Padmannavar(Jain College of Engineering, Belagavi, India)"
    },
    {
      "_id": 23,
      "title": "Review: Mass screening framework for children with dyslexia using IOT and computing analysis",
      "body": "Mulakaluri Sailaja(St.Francis de Sales college, India);Dr. Girisha G S(St.Francis de Sales college, India)"
    },
    {
      "_id": 24,
      "title": "Electrocardiogram Based Atrial Fibrillation Detection Using Principal Component Analysis and Decision Tree",
      "body": "Shrikanth Rao S.K(Vivekananda College of Engineering & Technology, Puttur, India);Sindura Saraswathi(Vivekananda College of Engineering & Technology, Puttur, India);Keerthan Kolathaya N(Vivekananda College of Engineering & Technology, Puttur, India);Maneesh M S(Vivekananda College of Engineering & Technology, Puttur, India);Prafulla B Prabhu(Vivekananda College of Engineering & Technology, Puttur, India);Roshan Joy Martis(Vivekananda College of Engineering & Technology, Puttur, India)"
    },
    {
      "_id": 25,
      "title": "Pedestrian Detection using Machine Learning and its comparison with HOG and Google Vision",
      "body": "Rahul Subramaniam(RV College of Engineering, India);Abhinav Upadhya(RV College of Engineering, India);Suhas Hegde(RV College of Engineering, India);Shashank Ravi(RV College of Engineering, India)"
    },
    {
      "_id": 26,
      "title": "Prediction of Player Price in IPL Auction using Machine Learning Regression Algorithms",
      "body": "Jhansi Rani Prathuri(CMR Institute of Technology, Bengaluru, India)"
    },
    {
      "_id": 27,
      "title": "An Application of IOT and WSN to Monitor the Temperature of AC Transmission line",
      "body": "Dr.Rashmi Shivarudraswamy(Vidyavardhaka College of Engineering, Mysore, India);Dr. Shankaraiah Ningaiah(Vidyavardhaka College of Engineering, Mysore, India);Pooja Hoskere Krishnamurthy(Vidyavardhaka College of Engineering, Mysore, India);Upanya Muniraj(Vidyavardhaka College of Engineering, Mysore, India)"
    },
    {
      "_id": 28,
      "title": "Novel Fused Algorithm for Multiple Human Face Detection and Tracking Under Various Background Video Sequences",
      "body": "Sharan A S(B.M.S College of Engineering, Bangalore, India);Dakshayini M(B.M.S College of Engineering, Bangalore, India);Lakshmi S R(B.M.S College of Engineering, Bangalore, India)"
    },
    {
      "_id": 29,
      "title": "Cloud based model for Sharing Patient's Health Information Across Hospitals & Analysis Using Machine Learning",
      "body": "Dinesh Goyal(Poornima Institute of Engineering & Technology, India);Jagdish Chand Bansal(South Asian University, India);Harish Sharma(Rajasthan Technical University, India);Ruchi Goyal(JECRC University, India)"
    },
    {
      "_id": 30,
      "title": "Blockchain Based Decentralized Cloud System",
      "body": "Dhruv Doshi(DCS-BBN, India)"
    },
    {
      "_id": 31,
      "title": "Novel Data Mining Techniques for Agriculture Data Sets",
      "body": "Vani V G(Govt. Engineering College, Kushalnagar, India);Dr. K Thippeswamy(Govt. Engineering College, Kushalnagar, India);Gagana H S(Govt. Engineering College, Kushalnagar, India)"
    }
]

export function getPubs() {
    return publications;
}