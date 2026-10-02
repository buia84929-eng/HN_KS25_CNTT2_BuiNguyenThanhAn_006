let curentEnrollCode = "";
let isEnrollValid = false;
let totalRevenue = 0;
let totalEnrollments = 0;

let choice;

while (true) {
    choice = prompt(`
===========================================
    HỆ THỐNG TUYỂN SINH BRIGHTWAY ENGLISH
===========================================
1. Nhập và kiểm chuẩn mã đăng ký
2. Tính học phí khóa học
3. Thẩm định số báo danh may mắn
0. Thoát chương trình
===========================================
Vui lòng nhập lựa chọn của bạn (0-3):
`);

    if (choice === null || choice.trim() === "0") {
        console.log("Đã kết thúc chương trình");
        break;
    }

    choice = choice.trim();

    switch (choice) {
        case "1":
            curentEnrollCode = "";
            isEnrollValid = false;

            let ticketInput = prompt("Vui lòng nhập mã đăng ký:");

            if (ticketInput === null) {
                console.log("Lỗi: Chưa nhập mã đăng ký");
                break;
            }

            let processedCode = ticketInput.trim().toUpperCase();

            if (processedCode === "") {
                console.log("Lỗi: Chưa nhập mã đăng ký");
            } 
            else if (processedCode.length < 6) {
                console.log("Lỗi: Độ dài nhỏ hơn 6 ký tự");
            } 
            else if (processedCode.startsWith("ENG-") === false) {
                console.log("Lỗi: Phải bắt đầu bằng 'ENG-'");
            } 
            else if (processedCode.includes(" ")) {
                console.log("Lỗi: Chứa khoảng trắng ở giữa");
            } 
            else {
                curentEnrollCode = processedCode;
                isEnrollValid = true;
                console.log(`Mã đăng ký hợp lệ: ${curentEnrollCode}`);
            }
            break;

        case "2":
            if (isEnrollValid === false) {
                console.log("Lỗi: Cần chọn chức năng 1 trước.");
                break;
            }

            let courseCount = 0;
            let pricePerCourse = 0;

            while (true) {
                let inputCount = prompt("Nhập số lượng khóa (số nguyên > 0):");

                if (inputCount === null) {
                    break;
                }

                let countParsed = Number(inputCount);

                if (countParsed > 0 && countParsed % 1 === 0) {
                    courseCount = countParsed;
                    break;
                }

                console.log("Lỗi, vui lòng nhập lại.");
            }

            if (courseCount === 0) {
                break;
            }

            while (true) {
                let inputPrice = prompt("Nhập giá một khóa (số nguyên > 0):");
                if (inputPrice === null) {
                    break;
                }

                let priceParsed = Number(inputPrice);
                if (priceParsed > 0 && priceParsed % 1 === 0) {
                    pricePerCourse = priceParsed;
                    break;
                }

                console.log("Lỗi, vui lòng nhập lại.");
            }

            if (pricePerCourse === 0) {
                break;
            }

            let baseCost = courseCount * pricePerCourse;
            let discount = 0;

            if (courseCount >= 4) {
                discount = Math.round(baseCost * 0.1);
            }

            let surcharge = Math.round((baseCost - discount) * 0.08);
            let totalPayment = (baseCost - discount) + surcharge;

            totalRevenue += totalPayment;
            totalEnrollments += 1;

            console.log("--- HÓA ĐƠN ĐĂNG KÝ ---");
            console.log(`Mã đăng ký: ${curentEnrollCode}`);
            console.log(`Số lượng khóa: ${courseCount}`);
            console.log(`Giá một khóa: ${pricePerCourse} VNĐ`);
            console.log(`Chi phí cơ sở: ${baseCost} VNĐ`);
            console.log(`Tiền giảm giá: ${discount} VNĐ`);
            console.log(`Phụ phí: ${surcharge} VNĐ`);
            console.log(`Tổng thanh toán: ${totalPayment} VNĐ`);
            console.log("------------------------");

            curentEnrollCode = "";
            isEnrollValid = false;
            break;

        case "3":
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
            break;
    }
}