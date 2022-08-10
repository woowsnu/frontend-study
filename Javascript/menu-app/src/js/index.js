
const $ = (selector) => document.querySelector(selector);

function App() {
  const editMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount} 개`;
  };

  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("메뉴를 입력해주세요.");
      return;
    }
    const espressoMenuName = $("#espresso-menu-name").value;
    const menuItemTemplate = (espressoMenuName) => {
      return `
        <li class="menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
          수정
        </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
          삭제
        </button>
      </li>
      `;
    };
    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuItemTemplate(espressoMenuName)
    );
    editMenuCount();
    $("#espresso-menu-name").value = "";
  };

  const editMenuName = (e) => {
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const menuName = $menuName.innerText;
    const editedMenuName = prompt("수정될 메뉴명을 입력하세요", menuName);
    $menuName.innerText = editedMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm("메뉴를 삭제하시겠습니까?")) {
      e.target.closest("li").remove();
      editMenuCount();
    }
  };

  $("#espresso-menu-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-edit-button")) {
      editMenuName(e);
    }
    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });

  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 이벤트 객체를 따로 받지 않으면 click 이벤트 뒤에 함수 이름만 써줘서 주소값을 바인딩 해준다!
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);


  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });
}

App();
