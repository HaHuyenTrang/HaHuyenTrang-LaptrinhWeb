// Thêm ký tự vào màn hình
function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

// Xóa toàn bộ màn hình
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Xóa một ký tự cuối cùng
function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Tính toán kết quả
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Sử dụng hàm eval để tính toán biểu thức
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Xử lý nút SHIFT và ALPHA (chưa áp dụng logic thực sự)
function setFunction(fn) {
    alert(`${fn} function is not implemented yet.`);
}

let display = document.querySelector('.display'); // Lấy màn hình hiển thị

// Hàm để thêm ký tự vào màn hình
function appendCharacter(character) {
    display.value += character; // Thêm ký tự vào nội dung màn hình
}

// Hàm để tính toán biểu thức
function calculate() {
    try {
        display.value = eval(display.value); // Sử dụng eval() để tính toán biểu thức
    } catch (error) {
        display.value = "Error"; // Nếu có lỗi, hiển thị "Error"
    }
}

// Hàm để xóa màn hình
function clearDisplay() {
    display.value = ''; // Xóa toàn bộ nội dung trên màn hình
}

