pragma solidity >0.4.23 <0.7.0;
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol"; contract Fundraiser is Ownable {
using SafeMath for uint256; ...omitted..
uint256 public totalDonations;
constructor( ...omitted...
)
public
{
...omitted...
}
function setBeneficiary(address payable _beneficiary) public onlyOwner { beneficiary = _beneficiary;
}
function myDonationsCount() public view returns(uint256) { return _donations[msg.sender].length;
}
function donate() public payable { Donation memory donation = Donation({
value: msg.value,
date: block.timestamp });
_donations[msg.sender].push(donation);
totalDonations = totalDonations.add(msg.value); }
function myDonations() public view returns( uint256[] memory values,
uint256[] memory dates
) {
uint256 count = myDonationsCount(); values = new uint256[](count); dates = new uint256[](count);
for (uint256 i = 0; i < count; i++) {
Donation storage donation = _donations[msg.sender][i]; values[i] = donation.value;
dates[i] = donation.date;