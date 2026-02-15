export const adddata = (req, res) => {

    console.log("FULL REQUEST OBJECT 👇");
    console.log(req);

    res.status(200).json({
        message: "Request object printed in terminal"
    });
}


export const getdatabynumber = (req, res) => {

    console.log("FULL REQUEST OBJECT 👇");
    console.log(req);

    res.status(200).json({
        message: "Param request printed"
    });
}


export const getdataByQuery = (req, res) => {

    console.log("FULL REQUEST OBJECT 👇");
    console.log(req);

    res.status(200).json({
        message: "Query request printed"
    });
}


export const getdataByheaders = (req, res) => {

    console.log("FULL REQUEST OBJECT 👇");
    console.log(req);

    res.status(200).json({
        message: "Header request printed"
    });
}
