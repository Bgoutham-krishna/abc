private decimal _balance;
private string _name;
private bool _executed;
private bool _reversed;
private DateTime _dateStamp;




public bool Deposit(decimal amountToAdd)
{
    if (amountToAdd > 0)
    {
        _balance = _balance + amountToAdd;
        return true;
    }
    return false;
}

public bool Withdraw(decimal amountToWithdraw)
{
    if (amountToWithdraw < _balance && amountToWithdraw > 0)
    {
        _balance = _balance - amountToWithdraw;
        return true;
    }
    return false;
}
