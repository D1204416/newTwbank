const userData = {
    txtReceiveType: "",
    txtIdNumber: "",
    txtStudentId: ""
};

function openNewWindow() {
    const receiveType = document.getElementById("txtReceiveType").value;
    const idNumber = document.getElementById("txtIdNumber").value;
    const studentId = document.getElementById("txtStudentId").value;

    userData.txtReceiveType = receiveType;
    userData.txtIdNumber = idNumber;
    userData.txtStudentId = studentId;

    const newWindow = window.open('about:blank', 'user_info_window', 'width=900,height=450');
    newWindow.document.write("<html><head><title>User Information</title><style>table {border-collapse: collapse;width: 100%;} th, td {border: 1px solid #dddddd;text-align: left;padding: 8px;} th {background-color: #f2f2f2;color: #666666;} h2 {text-align: center;} .submitButtonContainer {position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); margin-bottom: 20px;}</style></head><body>");
    newWindow.document.write("<div style='background-image: linear-gradient(to right, #9A0036, #D93657); color: white; padding: 10px; text-align: center;'>"); // 粉紅色橫幅
    newWindow.document.write("<h2>學生繳費資料</h2>");

    const table = newWindow.document.createElement("table");

    const row1 = table.insertRow();
    const cell1_1 = row1.insertCell(0);
    const cell1_2 = row1.insertCell(1);
    cell1_1.innerHTML = "<b>代收類別</b>";
    cell1_2.innerHTML = "逢甲大學-資訊工程學系學士後專班一";

    const row2 = table.insertRow();
    const cell2_1 = row2.insertCell(0);
    const cell2_2 = row2.insertCell(1);
    cell2_1.innerHTML = "<b>代收費用別</b>";
    cell2_2.innerHTML = "112-2 學期學雜(分)費";

    const row3 = table.insertRow();
    const cell3_1 = row3.insertCell(0);
    const cell3_2 = row3.insertCell(1);
    cell3_1.innerHTML = "<b>身分證字號</b>";
    cell3_2.innerHTML = idNumber;

    const row4 = table.insertRow();
    const cell4_1 = row4.insertCell(0);
    const cell4_2 = row4.insertCell(1);
    cell4_1.innerHTML = "<b>學號</b>";
    cell4_2.innerHTML = studentId;

    // 新增信用卡資料輸入框
    const row5 = table.insertRow();
    const cell5_1 = row5.insertCell(0);
    const cell5_2 = row5.insertCell(1);
    cell5_1.innerHTML = "<b>信用卡號碼</b>";
    cell5_2.innerHTML = "<div style='display: flex;'>";
    cell5_2.innerHTML += "<input type='text' id='txtCreditCardNumber1' maxlength='4' style='width: 7%; margin-right: 5px;' />";
    cell5_2.innerHTML += "<input type='text' id='txtCreditCardNumber2' maxlength='4' style='width: 7%; margin-right: 5px;' />";
    cell5_2.innerHTML += "<input type='text' id='txtCreditCardNumber3' maxlength='4' style='width: 7%; margin-right: 5px;' />";
    cell5_2.innerHTML += "<input type='text' id='txtCreditCardNumber4' maxlength='4' style='width: 7%;' />";
    cell5_2.innerHTML += "</div>";


    const row6 = table.insertRow();
    const cell6_1 = row6.insertCell(0);
    const cell6_2 = row6.insertCell(1);
    cell6_1.innerHTML = "<b>到期日</b>";
    cell6_2.innerHTML = "<input type='text' id='txtExpirationDate' />";

    const row7 = table.insertRow();
    const cell7_1 = row7.insertCell(0);
    const cell7_2 = row7.insertCell(1);
    cell7_1.innerHTML = "<b>安全驗證碼</b>";
    cell7_2.innerHTML = "<input type='text' id='txtSecurityCode' />";

    const row8 = table.insertRow();
    const cell8_1 = row8.insertCell(0);
    const cell8_2 = row8.insertCell(1);
    cell8_1.innerHTML = "<b>持卡者名字</b>";
    cell8_2.innerHTML = "<input type='text' id='txtCardHolderName' />";

    // 新增確認送出按鈕
    const submitButton = newWindow.document.createElement("button");
    submitButton.textContent = "確認送出";
    submitButton.classList.add("submitButtonContainer");
    submitButton.addEventListener("click", function() {
        // 在這裡放送出表單的程式碼
        newWindow.close(); // 關閉新視窗
    });
    newWindow.document.body.appendChild(submitButton);



    newWindow.document.body.appendChild(table);
    newWindow.document.write("</body></html>");
}
