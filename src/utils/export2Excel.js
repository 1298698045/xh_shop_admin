import FileSaver from "file-saver";
import XLSX from "xlsx";
export const exportExcel = (id)=>{
    var reportTitle = Date.parse(new Date())+'.xlsx'
    /* generate workbook object from table */
    // 判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去，
    var fix = document.querySelector('.el-table__fixed-right');
    var wb;
    var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
    if (fix) {
        wb = XLSX.utils.table_to_book(document.querySelector(id).removeChild(fix),xlsxParam);
        document.querySelector(id).appendChild(fix);
    } else {
        wb = XLSX.utils.table_to_book(document.querySelector(id),xlsxParam);
    }
    /* get binary string as output */
    var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
    });
    try {
        FileSaver.saveAs(
            new Blob([wbout], {
                type: 'application/octet-stream'
            }),
            reportTitle
        );
    } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout);
    }
    return wbout;
}