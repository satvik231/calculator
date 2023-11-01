var input_val=document.getElementById('inputval')
                var subInput_val = document.getElementById('subInputVal');
                var his_box = document.getElementById('historyBox');
                
                function getValue(val)
                {
                  if(input_val.value === '0')
                  {
                    input_val.value = val;
                  }
                  else
                  {
                    input_val.value += val;
                  }
                }
                function clearAll()
                {
                  input_val.value = "0";
                  subInput_val.value = "0";
                }

                function removeLastDigit()
                {
                  if(input_val.value.length > 1)
                  {
                  input_val.value=input_val.value.slice(0,-1);
                  }
                  else
                  {
                  input_val.value=input_val.value.slice(0,-1);
                  input_val.value="0";
                  }
                }

                function solve()
                {
                  var equ = input_val.value
                  subInput_val.value = equ + "="
                  var ans = eval(equ);
                  input_val.value = ans;
                  showHistory(equ, ans);
                }
                function showHistory(equ,ans)
                {
                  his_box.innerHTML += `<div class="his">
                                    <h3>${equ}=</h3>
                                    <h3>${ans}</h3>
                                    </div>`;
                }
                function clearHistory()
                {
                    var choice = confirm("are you sure you want to delete history ?");
                    if(choice)
                        document.getElementById('historyBox').innerHTML = "";
                }