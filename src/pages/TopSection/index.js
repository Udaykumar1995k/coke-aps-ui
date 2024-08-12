import React from "react";
import BreadcrumbLink from "../../components/common/breadcrumb";
import { useSelector } from "react-redux";
import { PropaneSharp } from "@mui/icons-material";

const TopSection = (props) => {
    const tabDetails = useSelector((state) => state?.dashboardDetails?.tabDetails);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    padding: '10px 0px 20px 0px',
                }}
            >
                <div>
                    <BreadcrumbLink labelList={props.labelList} />
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 12,
                    }}
                >Last updated : 12/07/2024</div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 22,
                    fontWeight: "bold",
                    padding: '0px 0px 20px 0px',
                }}
            >
                <div>Lead Time Analytics - {tabDetails?.title}</div>
            </div>
        </div>
    )
}

export default TopSection;