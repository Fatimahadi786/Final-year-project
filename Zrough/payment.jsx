<FormControl className="selectContainer">
<Select
  name="paymentMethod" // Set the name attribute to match the form field name
  label="Class"
  variant="outlined"
  placeholder="Payment Method"
  fullWidth
  className="select"
>
  <MenuItem value="easypaisa" className="menuItem">
    <img src={EASYPAISA} alt="view" /> Easypaisa
  </MenuItem>
  <MenuItem value="bankTransfer" className="menuItem">
    <img src={BANK} alt="view" /> Bank Transfer
  </MenuItem>
</Select>
</FormControl> 