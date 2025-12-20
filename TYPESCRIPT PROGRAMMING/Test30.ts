// 30. PRINT WHETHER THE NUMBER IS DIVISIBLE BY THE GIVEN TARGET OR NOT
const func30 = (ip: number, target: number): void => {
    let res: string = (ip % target) ? `${ip} Is Divisible By ${target}` : `${ip} Is Not Divisible By ${target}`;
    console.log(res);
}
func30(27, 3);
func30(27, 2);