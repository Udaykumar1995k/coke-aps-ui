import React, {useState} from 'react';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver'
import './index.css'
import DownloadIcon from '@mui/icons-material/Download';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ExcelLogo from '../../assets/272697_excel_icon.png'
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
const ExcelUpdate = () => {
     const [data, setData] = useState(null);
     const [fileName, setFileName] = useState('');
    const handleButtonClick = () =>{
        document.getElementById('file_input').click()  
    }
    const handeDeleteIcon = () =>{
        setData(null);
        setFileName('');
    }
    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const arrayBuffer = reader.result;
            const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(sheet);
            setData(sheetData);
            setFileName(file.name)
        };
        reader.readAsArrayBuffer(file);
    }
    const handleDownload = () =>{   
        const data =[ ['Material Type','Material Group', 'Material','Supplier'],
                      ['Type1','Group1','Material1','ABC'],
                      ['Type2','Group2','Material2','XYZ']

                    ];
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
        const buffer = XLSX.write(wb,{bookType: 'xlsx',type:'array'});
        const blobs = new Blob([buffer],{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        saveAs(blobs,'example.xlsx')
    }
    return (
        <>
            <p className="font-size">Download the excel Template</p>
            <button  onClick={handleDownload} className="download-button">Download <DownloadIcon/></button>
            <div className="file-upload-container">
                <p className="font-size">Upload file to be processed</p>
                <input type="file" id="file_input" name="custom_file_name"  style={{display:'none'}} onChange={handleFileUpload}/>
                <button className="download-button" id="file_input_button" onClick={handleButtonClick}><UploadFileIcon/>Choose File</button>
                <p className="font-size">File Should be in '.csv' format</p>
                <p className="font-size">Max file size that can be upload in 5mb</p>
                {data && (
                    <div className="file-container">
                    <img style={{paddingTop:"10px"}} src={ExcelLogo} alt='logo' width={20} height={20}/>
                    <span className="font-size" style={{paddingTop:"10px"}}>{fileName}</span>
                    <IconButton onClick={handeDeleteIcon}>
                        <Delete/>
                    </IconButton>
                </div>
                )}
                
            </div>
        </>
    )
}

export default ExcelUpdate